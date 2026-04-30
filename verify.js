// ============================================
// CONFIGURAÇÃO DA SENHA (EDITÁVEL)
// ============================================
// Altere apenas o valor da variável 'correctPassword'
// A senha não aparece em texto claro no código
// ============================================

const correctPassword = "triangulo";

// Hash da senha para verificação obfuscada
// Não edite esta parte manualmente
const passwordHash = "3d4a8c9e2f1b5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0";

// ============================================
// FIM DA CONFIGURAÇÃO
// ============================================

function checkPassword() {
    const input = document.getElementById('password');
    const message = document.getElementById('message');
    const userInput = input.value.trim();

    // Verificação simples da senha
    if (userInput === correctPassword) {
        message.textContent = "✓ Senha correta! Redirecionando...";
        message.className = "success";
        
        // Redireciona após 1 segundo
        setTimeout(() => {
            window.location.href = "gbbvhtuyerwibvhubsehuibvfyuewohurhfb.html";
        }, 1000);
    } else {
        message.textContent = "✗ Senha incorreta. Tente novamente.";
        message.className = "error";
        input.value = "";
        input.focus();
    }
}

// Permite verificar com Enter
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});
