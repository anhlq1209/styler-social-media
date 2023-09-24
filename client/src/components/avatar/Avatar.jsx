import './Avatar.css'

const Avatar = ({ src, className, alt }) => {
  return (
    <div className={`${className} avatar`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
