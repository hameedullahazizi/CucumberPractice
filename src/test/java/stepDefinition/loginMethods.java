package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginMethods {
	
	WebDriver driver;
	
	@Given("^I open the browser$")
	public void I_open_the_browser() {
		
		System.setProperty("webdriver.chrome.driver", "/Users/hameedazizi/Downloads/Drivers/chromedriver");
		driver = new ChromeDriver();
		
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	
	    
	}

	@When("^I go to this \"([^\"]*)\" environment$")
	public void I_go_to_this_environment(String url) {
		
		driver.get(url);
	    
	}

	@Then("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_and(String username, String password) {
		
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
	    
	}

	@Then("^I click \"([^\"]*)\"$")
	public void I_click(String login)  {
		
		driver.findElement(By.id(login)).click();
	    
	}

}
