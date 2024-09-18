function nextStep(option) {
    const text = document.getElementById('text');

    if (option === 'option1') {
        text.innerHTML = "Dazai sorri e começa a conversar com você sobre sua vida. Ele é charmoso e intrigante, e você acaba se envolvendo em uma conversa profunda.";
        document.querySelector('button').style.display = 'none';
        // Adicione mais opções ou encerre a aventura aqui
    } else if (option === 'option2') {
        text.innerHTML = "Você decide sair da sala. Dazai te observa com um olhar curioso enquanto você vai embora.";
        document.querySelector('button').style.display = 'none';
        // Adicione mais opções ou encerre a aventura aqui
    }
}