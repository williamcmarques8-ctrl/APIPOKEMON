import styles from './styles.module.css'
const colortype = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        grass: '#7AC74C',
        electric: '#F7D02C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
};
export default function coisas({id, name, sprite, color, typeone, typetwo, category}) {
    const colorTypeOne= colortype[typeone] || "white";
    const colorTypeTwo = colortype[typetwo] || "white";
    return(
        <div className={styles.coisasdiv}  >

            <div className={styles.coisasdivimgh2}>

                <div className={styles.coisasdivh2}>

                    <div className={styles.coisasdivh21}>
                        <h2>Nº {id}</h2>
                    </div>

                    <div className={styles.coisasdivh22}>   
                        <h2>{name}</h2>
                    </div>

                </div>

                <img 
                    src={sprite} 
                    alt={name} 
                />  
            </div>
            <div>
                <div className={styles.coisasdivdivs}>

                    <div className={styles.coisasdivtittle}><h2>category</h2></div>
                    <div className={styles.coisasdivtittle}><h2>type(s)</h2></div>

                    <div><p>{category}</p></div>

                    <div className={styles.coisasdivtype}>
                        <div style={{backgroundColor: colorTypeOne }}>
                            <p>{typeone}</p>
                        
                        </div>
                        {typetwo && (
                            <div style={{backgroundColor: colorTypeTwo }}>
                                <p>{typetwo}</p>
                            </div>
                        )}

                    </div>

                    <div></div>
                    <div></div>
                    
                </div>
            </div>
        </div>
    )
        
    
}