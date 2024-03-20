export default function irParaOutraPagina(url) {
    // Substitu o estado no histórico 
    history.replaceState(null, null, window.location.href);

    // Redirecionar para a outra página
    window.location.replace(url);
}