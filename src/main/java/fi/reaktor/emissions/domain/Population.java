package fi.reaktor.emissions.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Population {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String countryOrArea, item;
	private int year;
	private Double value;
	
	private Population() {
		super();
	}

	public Population(Long id, String countryOrArea, String item, int year, Double value) {
		super();
		this.countryOrArea = countryOrArea;
		this.item = item;
		this.year = year;
		this.value = value;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountryOrArea() {
		return countryOrArea;
	}

	public void setCountryOrArea(String countryOrArea) {
		this.countryOrArea = countryOrArea;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}
