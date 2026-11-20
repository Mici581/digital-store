import { useState } from 'react';
import './styles.css';

const Gallery = ({
  images = [],
  width = '100%',
  height = '400px',
  radius = '0',
  showThumbs = false,
}) => {
  const [atual, setAtual] = useState(0);

  const anterior = () =>
    setAtual((i) => (i === 0 ? images.length - 1 : i - 1));
  const proximo = () =>
    setAtual((i) => (i === images.length - 1 ? 0 : i + 1));

  if (images.length === 0) return null;

  return (
    <div className="gallery">
      <div
        className="gallery__principal"
        style={{ width, height, borderRadius: radius }}
      >
        <img src={images[atual].src} alt={`Imagem ${atual + 1}`} />
        <button className="gallery__seta gallery__seta--esq" onClick={anterior} aria-label="Anterior">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="gallery__seta gallery__seta--dir" onClick={proximo} aria-label="Próxima">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="gallery__bolinhas">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery__bolinha ${i === atual ? 'ativa' : ''}`}
            onClick={() => setAtual(i)}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>

      {showThumbs && (
        <div className="gallery__miniaturas">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Miniatura ${i + 1}`}
              className={i === atual ? 'ativa' : ''}
              onClick={() => setAtual(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;