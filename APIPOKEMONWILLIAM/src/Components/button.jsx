import styles from './styles.module.css'

export default function Button({ busca, setBusca, carregarPokemon, Aleatorio }){
    
    return(
        <div className={styles.buttondiv}>
          <div className={styles.buttondiv1}>
            <input 
              type="text" 
              placeholder="Digite o nome ou número..." 
              
              onChange={(e) => setBusca(e.target.value)}
              className={styles.buttoninput}
            />
        
            <button onClick={() => carregarPokemon()} className={styles.buttonpesquisar}>
              Search
            </button>
          </div>

          <div className={styles.buttondiv2}>
            <button onClick={Aleatorio} className={styles.buttonaleatorizar}>
              Random
            </button>
          </div>
        </div>
    )
}