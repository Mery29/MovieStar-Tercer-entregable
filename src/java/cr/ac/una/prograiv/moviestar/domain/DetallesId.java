package cr.ac.una.prograiv.moviestar.domain;
// Generated May 8, 2016 3:08:05 AM by Hibernate Tools 4.3.1



/**
 * DetallesId generated by hbm2java
 */
public class DetallesId  implements java.io.Serializable {


     private int DIdO;
     private int DIdC;

    public DetallesId() {
    }

    public DetallesId(int DIdO, int DIdC) {
       this.DIdO = DIdO;
       this.DIdC = DIdC;
    }
   
    public int getDIdO() {
        return this.DIdO;
    }
    
    public void setDIdO(int DIdO) {
        this.DIdO = DIdO;
    }
    public int getDIdC() {
        return this.DIdC;
    }
    
    public void setDIdC(int DIdC) {
        this.DIdC = DIdC;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof DetallesId) ) return false;
		 DetallesId castOther = ( DetallesId ) other; 
         
		 return (this.getDIdO()==castOther.getDIdO())
 && (this.getDIdC()==castOther.getDIdC());
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + this.getDIdO();
         result = 37 * result + this.getDIdC();
         return result;
   }   


}


