import React from 'react'
import { useProduct } from 'vtex.product-context'   
import { Image } from 'vtex.store-image'
import { useCssHandles } from 'vtex.css-handles'

interface ProductSpecificationImageProps {
  specification?: string
  group?: string
  name?: string
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  blockClass?: string
  experimentalPreventLayoutShift?: boolean
  preload?: boolean

}

const CSS_HANDLES = [
  
  'containerEmpty',
  'imageontainer'
,
] as const

const ProductSpecificationImage: StorefrontFunctionComponent<ProductSpecificationImageProps> = (
  { specification = "",
    group = "",
    name,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    blockClass,
    experimentalPreventLayoutShift,
    preload
    
  }
  
  ) => {

  const  handles = useCssHandles(CSS_HANDLES, blockClass)

  const productContextValue = useProduct();
  var image=loadField();


  function loadField(){
    var output=[];
    if(specification>="" && group >=""){
      //console.log("all specs");
      //console.log(productContextValue);
      var groups= productContextValue.product?.specificationGroups || false;
      
      if(groups.length>0){
        //console.log("groups:");
        //console.log(groups);
        for(var i=0; i<groups.length; i++){
          //finding the field in the groups
          if(groups[i].originalName != group) continue;

          for(var j=0; j<groups[i].specifications.length; j++){
            if(groups[i].specifications[j].originalName != specification) continue; //not ours? skip!

            output=groups[i].specifications[j].values; 
            console.log("JACKPOT!");
            console.log(output);
            break;
          }
          break;
          /*if(fields[i].name==specification && fields[i].values.length>0){
            console.log("found field: " + specification)
            
            output=fields[i].values[0];
            console.log("found value: " + output)
            break;
          }*/
        }
      }else { //we couldnt find groups, lets try to load the field individually.
        var fields = productContextValue.product?.properties;
        if(fields.length>0){
          for(var i=0; i<fields.length; i++){
            if(fields[i].name==specification){
              return fields[i].values
              
            } else continue;
          }
        }

      }
    }
    return output;
  }
  
  /*function activateProductContext(){
    console.log(productContextValue);
    console.log(specification);
    console.log("i got "+loadField());
    console.log("zeh video "+video)
    console.log("Zeh Fallback "+fallbackvideo)
  }*/
  function joinDOM(){
    if(typeof image[0] == "undefined") return "";
    else return image[0];
  }
  function buildDom(){
    let final = joinDOM();
    final = (typeof final == "undefined" ? "" : final);
    //console.log("image found for rendering:")
    //console.log(final)
    if(final.trim()<='' ){
      console.log("no image found - hide ");
      return <div className={handles.containerEmpty} ></div>;
    }
    else{
      
      
      return (
        <div className={handles.imageContainer}>
          <Image name={name}
            specification={specification}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            minWidth={minWidth}
            minHeight={minHeight}
            blockClass={blockClass}
            experimentalPreventLayoutShift={experimentalPreventLayoutShift}
            preload={preload}
            src={final}
            />
        </div>
      )
      
    }


  }
  
  
//<h3><button onClick={activateProductContext} >click me</button></h3>
  return ( <div>
    {buildDom()}
  </div> )
}


//Stuff for the site editor. Might not need it.
ProductSpecificationImage.schema = {
  title: 'editor.image.title',
  description: 'editor.image.description',
  type: 'object',
  properties: {

    specification: {
            title: 'Image specification field name',
            description: 'in which field is the image stored?',
            type: 'string',
            default: undefined,
        },
        name: {
          title: 'name of the image',
          description: 'good for SEO, alt and title?',
          type: 'string',
          default: undefined,
      },
      maxWidth: {
        title: 'maximum width of the image',
        description: '',
        type: 'string',
        default: undefined,
      },
      maxHeight: {
        title: 'maximum height of the image',
        description: '',
        type: 'string',
        default: undefined,
      },
      minWidth: {
        title: 'Minimum width of the image',
        description: '',
        type: 'string',
        default: undefined,
      },
      minHeight: {
        title: 'Minimum height of the image',
        description: '',
        type: 'string',
        default: undefined,
      },
      experimentalPreventLayoutShift: {
        title: 'Enable experimental layout shift',
        description: '',
        type: 'string',
        default: undefined,
      },
      preload: {
        title: 'Enable preload',
        description: 'Enables the preloading of the images.',
        type: 'string',
        default: undefined,
      },


      

  },
}

export default ProductSpecificationImage
