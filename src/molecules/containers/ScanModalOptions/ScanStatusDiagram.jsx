import { useSelector } from 'react-redux';
// Image Copyrights Freepik
import qrCode from '../../../img/qrCode.gif';
import verified from '../../../img/verified.gif';
import loading from '../../../img/loading.gif';
import warning from '../../../img/warning.gif';

const ScanStatusDiagram = () => {
  const { isUpdating, isUpdated, error } = useSelector((state) => state.scan);

  return (
    <div>
      {error ? (
        <img src={warning} />
      ) : isUpdating ? (
        <img src={loading} />
      ) : isUpdated ? (
        <img src={verified} />
      ) : (
        <img src={qrCode} />
      )}
    </div>
  );
};

export default ScanStatusDiagram;
