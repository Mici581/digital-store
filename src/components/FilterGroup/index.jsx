import './styles.css';

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-group__titulo">{title}</h4>
      {options.map((opcao) => (
        <label key={opcao.value} className="filter-group__opcao">
          <input
            type={inputType}
            name={title}
            value={opcao.value}
            defaultChecked={opcao.checked}
          />
          <span>{opcao.text}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterGroup;