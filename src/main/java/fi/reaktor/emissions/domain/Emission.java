package fi.reaktor.emissions.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Emission {
	
	private @Id @GeneratedValue Long id;
	private String countryOrArea, item;
	private int year;
	private Double value;
	
	private Emission() {}

	public Emission(Long id, String countryOrArea, String item, int year, Double value) {
		super();
		this.countryOrArea = countryOrArea;
		this.item = item;
		this.year = year;
		this.value = value;
	}
	
	

}
