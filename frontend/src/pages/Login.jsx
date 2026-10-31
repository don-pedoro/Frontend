import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Questify</h2>
        <p className="subtitle">Faça login para continuar sua jornada</p>
        
        <form id="loginForm">
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required placeholder="seu.email@exemplo.com" />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" required placeholder="********" />
          </div>

          <div id="errorMessage" className="error-message hidden"></div>
          
          <button type="submit" className="btn-primary">Entrar</button>
        </form>

        <p className="footer-link">
          Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}