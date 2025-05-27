import { FaDollarSign, FaTasks, FaUserCheck, FaRegThumbsUp } from 'react-icons/fa'; // Example icons
import './ARPracticeCleanup.css'; // Import the CSS file

const ARPracticeCleanup = () => {
  return (
    <div className="ar-cleanup-container">
      <div className="ar-cleanup-content">
        <h1 className="ar-cleanup-header">A/R Practice Cleanup Services</h1>
        
        <p className="ar-cleanup-paragraph">
          Is your practice struggling with outstanding A/R over 30 days? 
          Want to improve your cash flow but prefer to keep your trusted in-house biller?
        </p>
        <p className="ar-cleanup-paragraph">
          DAAE, an Adam Tech brand, offers a specialized <strong>A/R Cleanup service</strong> for claims aged 30 days and older. 
          We work to recover what&apos;s yours, so you can focus on patient care.
        </p>

        <div className="ar-benefits-section">
          <h2 className="ar-benefits-header">Key Benefits of Our A/R Cleanup:</h2>
          <ul className="ar-benefits-list">
            <li className="ar-benefits-list-item">
              <FaTasks className="ar-benefit-icon" />
              <div>
                <strong>Targeted Cleanup:</strong> Focus specifically on overdue accounts (30+ days).
              </div>
            </li>
            <li className="ar-benefits-list-item">
              <FaUserCheck className="ar-benefit-icon" />
              <div>
                <strong>Retain Your Biller:</strong> Complements your existing in-house billing team.
              </div>
            </li>
            <li className="ar-benefits-list-item">
              <FaDollarSign className="ar-benefit-icon" />
              <div>
                <strong>Performance-Based:</strong> Starting at just 6% of what we successfully collect.
              </div>
            </li>
            <li className="ar-benefits-list-item">
              <FaRegThumbsUp className="ar-benefit-icon" />
              <div>
                <strong>Risk-Free:</strong> If we can&apos;t collect, you don&apos;t pay a dime!
              </div>
            </li>
          </ul>
        </div>

        <p className="ar-cleanup-paragraph">
          Don&apos;t let aging accounts receivable impact your practice&apos;s financial health. 
          Let our experts help you clean up your A/R and improve your revenue cycle.
        </p>
        
        <button className="ar-cta-button">
          Inquire Now & Get a Free Consultation!
        </button>
      </div>
      {/* Optional: Add a visually appealing image or graphic here */}
      {/* <div className="ar-cleanup-visual">
        <img src="/path-to-your-image.png" alt="A/R Cleanup Visual" />
      </div> */}
    </div>
  );
};

export default ARPracticeCleanup; 