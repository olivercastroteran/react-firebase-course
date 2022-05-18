import { useLocation } from 'react-router-dom';

const Contact = () => {
  const qeryString = useLocation().search;
  const queryParams = new URLSearchParams(qeryString);
  const name = queryParams.get('name');

  return (
    <div className="contact">
      <h2>Hey {name ? name : 'You'}, contact us here...</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid
        amet cumque reprehenderit iste nisi porro perferendis consectetur ipsa
        libero, mollitia provident veritatis temporibus alias consequuntur
        molestiae nulla dicta eligendi!
      </p>
    </div>
  );
};

export default Contact;
