package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (
		
	features = "feature", 
	glue = "stepDefinition", 
	dryRun = false,
	monochrome = true,
	tags = "@Smoke",
	strict = true,
	plugin = {"pretty", "html: htmlReports/one"}
	
		)
public class Test_Runner {

}
