//*********************************************************************************************************************************************
package utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

//*********************************************************************************************************************************************
public class ConfigReader {
	private Properties properties;
	private static ConfigReader configReader;

	// *************************************************************************************************************************************
	// Function Objective:fetch config.properties and make them available across for
	// consumption
	// *************************************************************************************************************************************
	private ConfigReader() {
		BufferedReader reader;
		String propertyFilePath = System.getProperty("user.dir")
				+ "\\src\\test\\java\\Config\\Configuration.properties";
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}
	}

	// *************************************************************************************************************************************
	// Function Objective:Create an instance only if it's not already created and
	// return the same
	// *************************************************************************************************************************************
	public static ConfigReader getInstance() {
		if (configReader == null) {
			configReader = new ConfigReader();
		}
		return configReader;
	}

	// *************************************************************************************************************************************
	// Function Objective:Get base URI from config.properties
	// *************************************************************************************************************************************
	public String getBaseUri() {
		String baseUrl = properties.getProperty("base_URL");
		if (baseUrl != null)
			return baseUrl;
		else
			throw new RuntimeException("base_Url not specified in the Configuration.properties file.");
	}

	// *************************************************************************************************************************************
	// Function Objective:Get base URI from config.properties
	// *************************************************************************************************************************************
	public String getProperty(String property) {
		String propValue = properties.getProperty(property);
		if (propValue != null)
			return propValue;
		else
			throw new RuntimeException(
					"'" + property + "' is not specified in the Configuration.properties file / failed to fetch it");
	}
}