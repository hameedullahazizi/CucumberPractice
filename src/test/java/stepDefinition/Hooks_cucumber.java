package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks_cucumber {
	
	@Before
	public void beforemethod() {
		
		System.out.println("this will reun before each scenario");
		
		
	}

	@After
	public void tearDown () {
		System.out.println("this will run after the scenario");
	}

}
