import { ReactComponent as TextLogo } from '../../assets/jet-text-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-secondary">
      <div data-testid="footer-logo">
        <TextLogo />
      </div>
      <div className="space-x-12">
        <span className="text-white cursor-pointer">Cookie Statement</span>
        <span className="text-white">&copy; 2021 Takeaway.com</span>
      </div>
    </footer>
  );
};

export default Footer;
