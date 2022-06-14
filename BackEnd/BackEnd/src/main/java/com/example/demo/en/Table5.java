package com.example.demo.en;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "table5")
public class Table5 {
	  @Id
	    @GeneratedValue
	    int id;
	    String title7; 
	    short age; 


	    public Table5() {

	    }

	    public Table5(String title7, short age) {
	        super();
	        this.title7 = title7;
	        this.age = age;
	    }

	    
	    
	   

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getTitle7() {
			return title7;
		}

		public void setTitle7(String title7) {
			this.title7 = title7;
		}

		public short getAge() {
			return age;
		}

		public void setAge(short age) {
			this.age = age;
		}
		@Override
	    public String toString() {
	        return "{\"id\":"+id+",\"title7\":\""+title7+"\", \"age\":"+age + "}";
	    }
}
