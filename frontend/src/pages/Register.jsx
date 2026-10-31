import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Criar Conta</h2>
        <p className="subtitle">Junte-se ao Questify e comece sua jornada</p>
        
        <form id="registerForm">
          <div className="input-group">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" required placeholder="Seu nome" />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required placeholder="seu.email@exemplo.com" />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Senha forte</label>
            <input type="password" id="password" required placeholder="Digite sua senha" />
            
            <ul id="password-requirements" style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.8rem' }}>
              <li id="length" style={{ color: '#ef4444' }}>❌ Pelo menos 8 caracteres</li>
              <li id="uppercase" style={{ color: '#ef4444' }}>❌ Letra maiúscula e minúscula</li>
              <li id="number" style={{ color: '#ef4444' }}>❌ Pelo menos um número</li>
              <li id="symbol" style={{ color: '#ef4444' }}>❌ Pelo menos um símbolo (!@#$...)</li>
            </ul>
          </div>

          <div id="errorMessage" className="error-message hidden"></div>
          <div id="successMessage" className="success-message hidden" style={{ background: '#065f46', color: '#6ee7b7', padding: '0.5rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}></div>
          
          <button type="submit" className="btn-primary">Cadastrar</button>
        </form>

        <p className="footer-link">
          Já tem uma conta? <Link to="/">Faça login</Link>
        </p>
      </div>
    </div>
  );
}