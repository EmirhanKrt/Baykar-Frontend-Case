import Link from '../Link';
import './index.css';

const WhyJoinUsSection = () => {
  return (
    <section className="why-join-us-section">
      <div className="content-container why-join-us-container">
        <div className="why-join-us-text-container">
          <h4>Why join us</h4>
          <ul>
            <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
            <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
            <li>Ullamcorper ornare in et egestas dolor orci.</li>
          </ul>
          <Link referTo={'/sign-up'} className="w-fit" isButton={true}>
            Sign up now
          </Link>
        </div>
        <div>
          <img src="" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
