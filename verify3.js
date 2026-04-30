// ============================================
// CONFIGURAÇÃO DA SENHA - NÍVEL 3 (EDITÁVEL)
// ============================================
// Altere apenas o valor da variável 'correctPassword'
// ============================================

const correctPassword = "nicolas";

// ============================================
// FIM DA CONFIGURAÇÃO
// ============================================

function checkPassword() {
    const input = document.getElementById('password');
    const message = document.getElementById('message');
    const userInput = input.value.trim();

    if (userInput === correctPassword) {
        message.textContent = "✓ Parabéns! Você completou o enigma!";
        message.className = "success";
        
        setTimeout(() => {
            window.location.href = "victory.html";
        }, 1500);
    } else {
        message.textContent = "✗ Senha incorreta. Tente novamente.";
        message.className = "error";
        input.value = "";
        input.focus();
    }
}

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});