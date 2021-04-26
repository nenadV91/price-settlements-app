import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import iconMapper from './iconMapper';

const Icon = ({ name, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgPath, setImgPath] = useState('');

  const src = iconMapper[name]
    ? iconMapper[name].src
    : iconMapper.placeholder.src;

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: namedImport } = require(`${src}`);
        setImgPath(namedImport);
      } catch (err) {
        console.log('Error importing icon ', err);
      } finally {
        setIsLoading(false);
      }
    };

    importIcon();
  }, [src]);

  if (isLoading) {
    return <CircularProgress size={15} />;
  }

  if (imgPath) {
    return <img {...props} src={imgPath} alt={name} />;
  }

  return null;
};

export default Icon;
