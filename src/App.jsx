import { useMemo, useState } from "react";

export default function DashboardLogistico() {
  const dadosBase = {
    hoje: {
      pedidosDia: 1842,
      onTime: 96,
      custo: "R$ 42,8 mil",
      veiculos: 31,
      meta: "+8% vs ontem",
      entregas: [
        {
          id: "SPX-54821",
          cliente: "Seller Hub Uberlândia",
          cidade: "Uberlândia",
          status: "Em rota",
          prazo: "Hoje, 13:40",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "SPX-54822",
          cliente: "Seller Hub Araguari",
          cidade: "Araguari",
          status: "Atrasado",
          prazo: "Hoje, 10:10",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "SPX-54823",
          cliente: "CD Uberaba",
          cidade: "Uberaba",
          status: "Entregue",
          prazo: "Hoje, 09:20",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "LH-3104",
          cliente: "Transferência Hub Goiânia",
          cidade: "Goiânia",
          status: "Em rota",
          prazo: "Hoje, 18:30",
          transportadora: "SPX Express",
          tipo: "LH",
        },
        {
          id: "LH-3105",
          cliente: "Transferência Hub Ribeirão",
          cidade: "Ribeirão Preto",
          status: "Separação",
          prazo: "Hoje, 22:00",
          transportadora: "SPX Express",
          tipo: "LH",
        },
      ],
      regioes: [
        { nome: "Triângulo Mineiro", valor: 46 },
        { nome: "Interior de SP", valor: 24 },
        { nome: "Goiás", valor: 18 },
        { nome: "Outras rotas", valor: 12 },
      ],
      alertas: [
        {
          titulo: "Janela crítica de expedição",
          texto: "2 LHs precisam sair até 22:00 para manter o SLA da madrugada.",
        },
        {
          titulo: "Pacotes pendentes de roteirização",
          texto: "148 volumes ainda aguardam definição de rota no hub local.",
        },
        {
          titulo: "Risco de atraso regional",
          texto: "Araguari e Uberaba estão com aumento no tempo médio de descarga.",
        },
      ],
      resumoFrota:
        "31 veículos ativos, sendo 7 LHs em operação e 24 dedicados ao fluxo urbano e regional.",
      nivelServico:
        "SLA estimado em 96%, com boa performance no last mile e atenção especial nas saídas noturnas.",
      estoque:
        "2.940 pacotes processados no turno, com 186 volumes em staging e tempo médio de separação de 19 minutos.",
    },

    semana: {
      pedidosDia: 11890,
      onTime: 94,
      custo: "R$ 278,5 mil",
      veiculos: 36,
      meta: "+5% vs semana anterior",
      entregas: [
        {
          id: "SPX-54791",
          cliente: "Seller Hub Uberlândia",
          cidade: "Uberlândia",
          status: "Entregue",
          prazo: "Ontem, 17:30",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "SPX-54792",
          cliente: "Seller Hub Patos",
          cidade: "Patos de Minas",
          status: "Em rota",
          prazo: "Hoje, 15:10",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "SPX-54793",
          cliente: "Seller Hub Ituiutaba",
          cidade: "Ituiutaba",
          status: "Separação",
          prazo: "Hoje, 16:50",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "LH-3098",
          cliente: "Transferência Hub Campinas",
          cidade: "Campinas",
          status: "Em rota",
          prazo: "Hoje, 23:40",
          transportadora: "SPX Express",
          tipo: "LH",
        },
        {
          id: "LH-3099",
          cliente: "Transferência Hub Goiânia",
          cidade: "Goiânia",
          status: "Atrasado",
          prazo: "Hoje, 21:00",
          transportadora: "SPX Express",
          tipo: "LH",
        },
      ],
      regioes: [
        { nome: "Triângulo Mineiro", valor: 42 },
        { nome: "Interior de SP", valor: 29 },
        { nome: "Goiás", valor: 17 },
        { nome: "Outras rotas", valor: 12 },
      ],
      alertas: [
        {
          titulo: "Oscilação no lead time",
          texto: "A rota para Goiás subiu 11% no tempo médio da última semana.",
        },
        {
          titulo: "Capacidade em alta",
          texto: "A ocupação média das carretas LH está em 92%.",
        },
        {
          titulo: "Backlog operacional",
          texto: "321 volumes aguardando reprocesso por divergência de etiqueta.",
        },
      ],
      resumoFrota:
        "36 veículos ativos na semana, com maior concentração operacional em SPX urbano e line haul noturno.",
      nivelServico:
        "OTIF estimado em 94%, com estabilidade nas entregas urbanas e variação em rotas intermunicipais.",
      estoque:
        "18.420 pacotes processados na semana, com pico de recebimento na segunda e terça-feira.",
    },

    mes: {
      pedidosDia: 48670,
      onTime: 95,
      custo: "R$ 1,08 mi",
      veiculos: 39,
      meta: "+9% vs mês anterior",
      entregas: [
        {
          id: "SPX-54510",
          cliente: "Seller Hub Uberlândia",
          cidade: "Uberlândia",
          status: "Entregue",
          prazo: "Semana passada",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "SPX-54511",
          cliente: "Seller Hub Franca",
          cidade: "Franca",
          status: "Em rota",
          prazo: "Hoje, 14:50",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "SPX-54512",
          cliente: "Seller Hub Goiânia",
          cidade: "Goiânia",
          status: "Separação",
          prazo: "Hoje, 19:30",
          transportadora: "SPX Express",
          tipo: "Last Mile",
        },
        {
          id: "LH-3052",
          cliente: "Transferência Hub Ribeirão",
          cidade: "Ribeirão Preto",
          status: "Entregue",
          prazo: "Hoje, 06:10",
          transportadora: "SPX Express",
          tipo: "LH",
        },
        {
          id: "LH-3053",
          cliente: "Transferência Hub Campinas",
          cidade: "Campinas",
          status: "Em rota",
          prazo: "Hoje, 22:50",
          transportadora: "SPX Express",
          tipo: "LH",
        },
      ],
      regioes: [
        { nome: "Triângulo Mineiro", valor: 39 },
        { nome: "Interior de SP", valor: 31 },
        { nome: "Goiás", valor: 19 },
        { nome: "Outras rotas", valor: 11 },
      ],
      alertas: [
        {
          titulo: "Pico de volume mensal",
          texto: "O hub operou com aumento de 14% no volume em relação ao mês anterior.",
        },
        {
          titulo: "Janelas de LH sensíveis",
          texto: "3 rotas noturnas exigem replanejamento para reduzir ociosidade.",
        },
        {
          titulo: "Produtividade de separação",
          texto: "A operação melhorou 6% no throughput médio por hora.",
        },
      ],
      resumoFrota:
        "39 veículos ativos ao longo do mês, com reforço temporário em line haul e malha regional.",
      nivelServico:
        "SLA mensal em 95%, sustentado por boa produtividade de expedição e regularidade nas saídas.",
      estoque:
        "76.200 pacotes processados no mês, com estabilidade nos turnos e ganho de produtividade em staging.",
    },
  };

  const [periodo, setPeriodo] = useState("hoje");

  const dados = useMemo(() => dadosBase[periodo], [periodo]);

  function corStatus(status) {
    if (status === "Entregue") return "#22c55e";
    if (status === "Em rota") return "#3b82f6";
    if (status === "Atrasado") return "#ef4444";
    if (status === "Separação") return "#f59e0b";
    return "#94a3b8";
  }

  function fundoStatus(status) {
    if (status === "Entregue") return "rgba(34, 197, 94, 0.14)";
    if (status === "Em rota") return "rgba(59, 130, 246, 0.14)";
    if (status === "Atrasado") return "rgba(239, 68, 68, 0.14)";
    if (status === "Separação") return "rgba(245, 158, 11, 0.14)";
    return "rgba(148, 163, 184, 0.12)";
  }

  function exportarCSV() {
    const cabecalho = [
      "pedido",
      "cliente",
      "cidade",
      "status",
      "prazo",
      "transportadora",
      "tipo",
    ];

    const linhas = dados.entregas.map((item) => [
      item.id,
      item.cliente,
      item.cidade,
      item.status,
      item.prazo,
      item.transportadora,
      item.tipo,
    ]);

    const conteudo = [
      cabecalho.join(","),
      ...linhas.map((linha) =>
        linha.map((valor) => `"${String(valor).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([conteudo], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `dashboard-logistico-${periodo}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function atualizarPainel() {
    const ordem = ["hoje", "semana", "mes"];
    const indiceAtual = ordem.indexOf(periodo);
    const proximo = ordem[(indiceAtual + 1) % ordem.length];
    setPeriodo(proximo);
  }

  const estilos = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #07111f 0%, #0f172a 100%)",
      color: "#e5eefb",
      fontFamily: "Arial, sans-serif",
      padding: "30px 20px 44px",
    },
    container: {
      maxWidth: "1220px",
      margin: "0 auto",
    },
    hero: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(148, 163, 184, 0.18)",
      borderRadius: "30px",
      padding: "32px",
      boxShadow: "0 18px 45px rgba(2, 6, 23, 0.28)",
      marginBottom: "24px",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
    },
    badge: {
      display: "inline-flex",
      padding: "8px 14px",
      borderRadius: "999px",
      background: "rgba(16, 185, 129, 0.14)",
      color: "#a7f3d0",
      fontWeight: "bold",
      fontSize: "0.9rem",
      marginBottom: "14px",
    },
    title: {
      margin: "0 0 12px 0",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      color: "#f8fafc",
      letterSpacing: "-0.03em",
      textAlign: "center",
      lineHeight: 1.05,
    },
    subtitle: {
      margin: "0 auto",
      color: "#cbd5e1",
      lineHeight: 1.8,
      maxWidth: "860px",
      fontSize: "1rem",
      textAlign: "center",
    },
    topActions: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "24px",
    },
    filterGroup: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    topButtons: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    actionButton: {
      background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "14px",
      padding: "13px 18px",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(37, 99, 235, 0.25)",
    },
    secondaryButton: {
      background: "rgba(255,255,255,0.08)",
      color: "#e2e8f0",
      border: "1px solid rgba(148, 163, 184, 0.18)",
      borderRadius: "14px",
      padding: "13px 18px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    activeFilter: {
      background: "rgba(37, 99, 235, 0.18)",
      color: "#dbeafe",
      border: "1px solid rgba(59, 130, 246, 0.35)",
      borderRadius: "14px",
      padding: "13px 18px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    kpiGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
      marginBottom: "24px",
    },
    kpiCard: {
      background: "linear-gradient(180deg, #182334 0%, #1c2a3f 100%)",
      border: "1px solid rgba(148, 163, 184, 0.12)",
      borderRadius: "22px",
      padding: "22px",
      boxShadow: "0 12px 28px rgba(2, 6, 23, 0.20)",
      position: "relative",
      overflow: "hidden",
    },
    kpiGlow: {
      position: "absolute",
      top: "-30px",
      right: "-20px",
      width: "90px",
      height: "90px",
      borderRadius: "999px",
      background: "rgba(59, 130, 246, 0.10)",
      filter: "blur(10px)",
    },
    kpiLabel: {
      margin: 0,
      color: "#93c5fd",
      fontSize: "0.82rem",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: "bold",
      position: "relative",
      zIndex: 1,
    },
    kpiValue: {
      margin: "12px 0 8px 0",
      color: "#f8fafc",
      fontSize: "2rem",
      fontWeight: "800",
      lineHeight: 1,
      position: "relative",
      zIndex: 1,
    },
    kpiMeta: {
      margin: 0,
      color: "#94a3b8",
      fontSize: "0.94rem",
      position: "relative",
      zIndex: 1,
    },
    contentGrid: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.55fr) minmax(320px, 1fr)",
      gap: "18px",
      marginBottom: "22px",
    },
    section: {
      background: "#182334",
      border: "1px solid rgba(148, 163, 184, 0.12)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 14px 32px rgba(2, 6, 23, 0.20)",
    },
    sectionTitle: {
      margin: "0 0 8px 0",
      color: "#f8fafc",
      fontSize: "1.28rem",
    },
    sectionText: {
      margin: "0 0 18px 0",
      color: "#94a3b8",
      lineHeight: 1.6,
      fontSize: "0.96rem",
    },
    tableWrapper: {
      overflowX: "auto",
      borderRadius: "18px",
      border: "1px solid rgba(148, 163, 184, 0.10)",
      background: "#223046",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "820px",
    },
    th: {
      textAlign: "left",
      padding: "15px 16px",
      color: "#93c5fd",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      borderBottom: "1px solid rgba(148, 163, 184, 0.10)",
      background: "rgba(255,255,255,0.02)",
    },
    td: {
      padding: "15px 16px",
      color: "#e2e8f0",
      borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
      fontSize: "0.95rem",
    },
    pedidoId: {
      color: "#f8fafc",
      fontWeight: "bold",
    },
    clienteText: {
      color: "#dbeafe",
      fontWeight: 600,
    },
    tipoBadge: {
      display: "inline-flex",
      padding: "6px 10px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.08)",
      color: "#cbd5e1",
      fontWeight: "bold",
      fontSize: "0.78rem",
    },
    statusBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "7px 12px",
      borderRadius: "999px",
      fontWeight: "bold",
      fontSize: "0.82rem",
    },
    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "999px",
      display: "inline-block",
    },
    sideStack: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    regionList: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      marginTop: "10px",
    },
    regionRow: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    regionTop: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
      color: "#e2e8f0",
      fontSize: "0.95rem",
    },
    progressTrack: {
      width: "100%",
      height: "11px",
      background: "rgba(148, 163, 184, 0.12)",
      borderRadius: "999px",
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      borderRadius: "999px",
      background: "linear-gradient(90deg, #2563eb 0%, #22c55e 100%)",
      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.35)",
    },
    alertList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "8px",
    },
    alertItem: {
      background: "#223046",
      border: "1px solid rgba(148, 163, 184, 0.10)",
      borderRadius: "16px",
      padding: "14px 16px",
      color: "#e2e8f0",
      lineHeight: 1.5,
      boxShadow: "0 8px 20px rgba(2, 6, 23, 0.14)",
    },
    alertTitle: {
      margin: "0 0 4px 0",
      color: "#f8fafc",
      fontSize: "0.98rem",
      fontWeight: "bold",
    },
    alertText: {
      margin: 0,
      color: "#cbd5e1",
      fontSize: "0.93rem",
    },
    bottomGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "18px",
    },
    miniCard: {
      background: "linear-gradient(180deg, #182334 0%, #1c2a3f 100%)",
      border: "1px solid rgba(148, 163, 184, 0.12)",
      borderRadius: "22px",
      padding: "22px",
      boxShadow: "0 14px 32px rgba(2, 6, 23, 0.20)",
    },
    miniTitle: {
      margin: "0 0 12px 0",
      color: "#f8fafc",
      fontSize: "1.08rem",
    },
    miniText: {
      margin: 0,
      color: "#cbd5e1",
      lineHeight: 1.75,
      fontSize: "0.95rem",
    },
    highlight: {
      color: "#93c5fd",
      fontWeight: "bold",
    },
  };

  return (
    <div style={estilos.page}>
      <div style={estilos.container}>
        <section style={estilos.hero}>
          <div style={estilos.badge}>Dashboard Logístico • SPX Express</div>

          <h1 style={estilos.title}>Painel de Controle Logístico</h1>

          <p style={estilos.subtitle}>
            Esboço inicial de um dashboard para acompanhar entregas, desempenho
            operacional, distribuição regional, frota, alertas e indicadores
            estratégicos da logística.
          </p>

          <div style={estilos.topActions}>
            <div style={estilos.filterGroup}>
              <button
                onClick={() => setPeriodo("hoje")}
                style={periodo === "hoje" ? estilos.activeFilter : estilos.secondaryButton}
              >
                Hoje
              </button>
              <button
                onClick={() => setPeriodo("semana")}
                style={periodo === "semana" ? estilos.activeFilter : estilos.secondaryButton}
              >
                7 dias
              </button>
              <button
                onClick={() => setPeriodo("mes")}
                style={periodo === "mes" ? estilos.activeFilter : estilos.secondaryButton}
              >
                30 dias
              </button>
            </div>

            <div style={estilos.topButtons}>
              <button onClick={exportarCSV} style={estilos.secondaryButton}>
                Exportar dados
              </button>
              <button onClick={atualizarPainel} style={estilos.actionButton}>
                Atualizar painel
              </button>
            </div>
          </div>
        </section>

        <section style={estilos.kpiGrid}>
          <div style={estilos.kpiCard}>
            <div style={estilos.kpiGlow} />
            <p style={estilos.kpiLabel}>Volumes processados</p>
            <h2 style={estilos.kpiValue}>{dados.pedidosDia}</h2>
            <p style={estilos.kpiMeta}>{dados.meta}</p>
          </div>

          <div style={estilos.kpiCard}>
            <div style={estilos.kpiGlow} />
            <p style={estilos.kpiLabel}>Entregas no prazo</p>
            <h2 style={estilos.kpiValue}>{dados.onTime}%</h2>
            <p style={estilos.kpiMeta}>Base operacional SPX Express</p>
          </div>

          <div style={estilos.kpiCard}>
            <div style={estilos.kpiGlow} />
            <p style={estilos.kpiLabel}>Custo logístico</p>
            <h2 style={estilos.kpiValue}>{dados.custo}</h2>
            <p style={estilos.kpiMeta}>Consolidado do período</p>
          </div>

          <div style={estilos.kpiCard}>
            <div style={estilos.kpiGlow} />
            <p style={estilos.kpiLabel}>Veículos / LHs ativos</p>
            <h2 style={estilos.kpiValue}>{dados.veiculos}</h2>
            <p style={estilos.kpiMeta}>Malha SPX + carretas LH</p>
          </div>
        </section>

        <section style={estilos.contentGrid}>
          <div style={estilos.section}>
            <h2 style={estilos.sectionTitle}>Operação em andamento</h2>
            <p style={estilos.sectionText}>
              Acompanhamento de cargas, rotas urbanas e saídas de LH dentro da
              malha operacional.
            </p>

            <div style={estilos.tableWrapper}>
              <table style={estilos.table}>
                <thead>
                  <tr>
                    <th style={estilos.th}>Pedido / Carga</th>
                    <th style={estilos.th}>Origem / Cliente</th>
                    <th style={estilos.th}>Cidade</th>
                    <th style={estilos.th}>Tipo</th>
                    <th style={estilos.th}>Status</th>
                    <th style={estilos.th}>Prazo</th>
                    <th style={estilos.th}>Transportadora</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.entregas.map((item) => (
                    <tr key={item.id}>
                      <td style={{ ...estilos.td, ...estilos.pedidoId }}>
                        {item.id}
                      </td>
                      <td style={{ ...estilos.td, ...estilos.clienteText }}>
                        {item.cliente}
                      </td>
                      <td style={estilos.td}>{item.cidade}</td>
                      <td style={estilos.td}>
                        <span style={estilos.tipoBadge}>{item.tipo}</span>
                      </td>
                      <td style={estilos.td}>
                        <span
                          style={{
                            ...estilos.statusBadge,
                            backgroundColor: fundoStatus(item.status),
                            color: corStatus(item.status),
                          }}
                        >
                          <span
                            style={{
                              ...estilos.dot,
                              backgroundColor: corStatus(item.status),
                            }}
                          />
                          {item.status}
                        </span>
                      </td>
                      <td style={estilos.td}>{item.prazo}</td>
                      <td style={estilos.td}>{item.transportadora}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={estilos.sideStack}>
            <div style={estilos.section}>
              <h2 style={estilos.sectionTitle}>Distribuição por região</h2>
              <p style={estilos.sectionText}>
                Participação estimada de volume expedido por região atendida.
              </p>

              <div style={estilos.regionList}>
                {dados.regioes.map((regiao) => (
                  <div key={regiao.nome} style={estilos.regionRow}>
                    <div style={estilos.regionTop}>
                      <span>{regiao.nome}</span>
                      <strong>{regiao.valor}%</strong>
                    </div>
                    <div style={estilos.progressTrack}>
                      <div
                        style={{
                          ...estilos.progressBar,
                          width: `${regiao.valor}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={estilos.section}>
              <h2 style={estilos.sectionTitle}>Alertas operacionais</h2>
              <p style={estilos.sectionText}>
                Pontos de atenção que impactam SLA, expedição e fluxo de linha.
              </p>

              <div style={estilos.alertList}>
                {dados.alertas.map((alerta, index) => (
                  <div key={index} style={estilos.alertItem}>
                    <h3 style={estilos.alertTitle}>{alerta.titulo}</h3>
                    <p style={estilos.alertText}>{alerta.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={estilos.bottomGrid}>
          <div style={estilos.miniCard}>
            <h3 style={estilos.miniTitle}>Resumo de frota</h3>
            <p style={estilos.miniText}>{dados.resumoFrota}</p>
          </div>

          <div style={estilos.miniCard}>
            <h3 style={estilos.miniTitle}>Nível de serviço</h3>
            <p style={estilos.miniText}>{dados.nivelServico}</p>
          </div>

          <div style={estilos.miniCard}>
            <h3 style={estilos.miniTitle}>Fluxo de estoque e separação</h3>
            <p style={estilos.miniText}>{dados.estoque}</p>
          </div>
        </section>
      </div>
    </div>
  );
}