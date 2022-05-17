import { create } from 'react-test-renderer';
import App from '../App';

/* Se instancian las variables de manera global para usar en las distintas pruebas */
let component;
let header;

describe("<App />", () => {
  //Esta función de jest se ejecuta antes de cada una de las pruebas
  beforeAll(()=>{

    //create() crea el componente recibido en un dom virtual de pruebas
    component = create(<App />);
    header = component.root.findByType("header");
  })
  //It recibe el identificador de la prueba y un arrow function para ejecutar dicha prueba
  it("Renderiza correctamente", () => {
    //expect recibe el argumento para validar que retorne lo esperado
    expect(component).toBeDefined();
  });
  
  it("Renderiza el header correctamente", () => {
    const img = header.findByType("img");
    //Valida que exista una etiqueta header
    expect(header).toBeDefined();
    //Valida que tengo una img con logo.svg
    expect(img).toBeDefined();
    expect(img.props.src).toEqual("logo.svg");
  });
});

