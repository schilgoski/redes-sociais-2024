import { criarGrafico, getCSS, incluirTexto } from "./common.js"

async function redesSociaisFavoritasMinhaEscola() {
    
    const jsonDados = {
        "escola": "C.C.M Joana Torres",
        "redes_favoritas": [
            { "nome": "Facebook", "popularidade": 1 },
            { "nome": "Instagram", "popularidade": 21 },
            { "nome": "WhatsApp", "popularidade": 17 },
            { "nome": "Tik-Tok", "popularidade": 8 },
            { "nome": "Outros", "popularidade": 5 }
        ]
    }

    processarDados(jsonDados)
}

function processarDados(dados) {
    const redesSociais = dados.redes_favoritas.map(rede => ({
        nome: rede.nome,
        popularidade: rede.popularidade
    }))

    const labels = redesSociais.map(rede => rede.nome)
    const valores = redesSociais.map(rede => rede.popularidade)
    const data = [
        {
            values: valores,
            labels: labels,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Redes sociais que as pessoas da minha escola mais gostam',
            x: 0.5,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }
    criarGrafico(data, layout)
    incluirTexto(`Como no mundo, a amostra de pessoas entrevistadas por mim, demonstra um apreço pelo <span>Instagram</span> em relação a outras redes.`)
}

redesSociaisFavoritasMinhaEscola()
