# HackHolyoke-2024

# DisasterWise: AI-Powered Global Disaster Risk Prediction Platform
Project Overview: DisasterWise is an AI-powered platform designed to analyze, assess, and predict disaster risk across global regions. Built for policymakers, disaster response teams, and the public, DisasterWise leverages historical disaster data and machine learning to calculate a Disaster Risk Index (WRI) for various regions. By offering insights into the economic and human impacts of past disasters and providing risk predictions, the platform aids in better preparation and informed decision-making for mitigating disaster risks worldwide.

## Features

### Users begin by selecting a geographic region via an interactive, zoomable map powered by JavaScript.
This map allows users to hover over specific areas, highlighting regions that have been historically impacted by natural disasters. Users can then click on a region to drill down into detailed data and risk predictions.
The interface displays recent disaster data and patterns specific to the selected region, encouraging users to explore the severity, frequency, and nature of disasters over time.
### For each region, users can view data across a range of critical metrics:
Economic Damage: Total financial losses attributed to each disaster type, adjusted for inflation and available across multiple timeframes (last 5, 10, and 20 years).
Human Impact: Data on fatalities, injuries, and total affected populations, illustrating the scale of human suffering and loss.
Response and Aid Trends: Historical data on disaster response effectiveness, including response time, level of preparedness, and trends in financial aid and insurance payouts.
This information is visually represented through dynamic charts and graphs, making it easy to interpret patterns, assess the effectiveness of past disaster responses, and identify areas for improvement.

## The core feature of DisasterWise is its ability to predict the Disaster Risk Index (WRI) for each region, generated using a neural network model.
The WRI calculation is based on multiple factors, including exposure to hazards, societal vulnerability, and adaptive capacity.
The prediction model outputs an overall WRI score, along with an analysis of factors driving the risk, helping users understand and address specific vulnerabilities.
System Workflow

### DisasterWise collects data from two primary sources:
EM-DAT Global Disaster Database: This database provides global disaster data, capturing the type, location, date, and impact of each event. Each disaster entry includes an identifier (Dis No.) and records impacts at the country level.
WorldRiskReport: An annual report that compiles the WorldRiskIndex based on exposure, susceptibility, and adaptive capacity indicators for 181 countries, covering risks from earthquakes, cyclones, floods, and other natural hazards.
These datasets offer a comprehensive view of disaster trends and the vulnerability of different regions, providing a solid foundation for the prediction model.

Data from both datasets is processed and standardized using RStudio for initial cleaning and analysis. Data inconsistencies, such as missing values or outliers, are handled through interpolation, normalization, and batch processing techniques. Python’s Pandas library is used to manage and transform data into a format compatible with the neural network model, ensuring data uniformity and robustness. After that, DisasterWise utilizes a neural network model developed in Python using the Keras and TensorFlow libraries. The model is structured to predict the WRI based on features related to exposure, vulnerability, susceptibility, and adaptive capacity.

Model Architecture:
Input Layer: Accepts multiple features representing disaster risk factors.
Hidden Layers: Three fully connected layers with ReLU activation and dropout layers to improve generalization.
Output Layer: A single node that outputs the WRI score, scaled between 0 and 100.
The model is trained using historical data, with evaluation metrics such as Mean Absolute Error (MAE), Mean Squared Error (MSE), and R-squared (R²) to ensure high accuracy and generalization to unseen data.

## Tech Stack
Python serves as the primary language for machine learning and data processing. Keras and TensorFlow libraries support neural network development, while Pandas and NumPy assist with data transformation. JavaScript enables the creation of interactive, dynamic maps for data visualization. Libraries like Leaflet or Mapbox facilitate a seamless map interaction experience. HTML and CSS define the website’s structure and design, creating a user-friendly and visually engaging platform. RStudio is used for initial data cleaning and exploratory data analysis, particularly for handling large datasets and performing statistical analysis on disaster data.


Data Sources
1. EM-DAT Global Disaster Database
The EM-DAT database compiles detailed records of disaster events worldwide from 2000 to the present. Each record includes:
Disaster Type: Natural disaster types like earthquakes, floods, hurricanes, etc.
Date and Location: Exact date and geographic location of the disaster, allowing for temporal and spatial analysis.
Human Impact: Total fatalities, injuries, and affected population for each event.
Economic Damage: Financial losses associated with the disaster, adjusted for inflation.
Data structure supports multi-country disaster events, enabling impact comparisons across countries.
2. WorldRiskReport
The WorldRiskReport provides an annual analysis of global disaster risk levels across 181 countries, covering:
Exposure: Likelihood of natural hazards like earthquakes, cyclones, floods, and droughts.
Vulnerability: Socioeconomic and structural vulnerability of each country, including susceptibility and coping/adaptive capacity.
The WorldRiskIndex is a composite score from 0 to 100, with higher scores indicating greater disaster risk. This data serves as a foundation for calculating the predicted WRI.

## Model Development
#### Main goal of the model is to develop a highly accurate model to predict the Disaster Risk Index (WRI) using an extensive set of disaster risk indicators.

#### Key indicators—exposure, societal vulnerability, susceptibility, and adaptive capacity—are chosen for their direct impact on disaster risk.
These features provide a holistic view of both natural and human factors influencing disaster risk. To enhance data consistency, the dataset is normalized and standardized. Batch normalization and dropout layers improve model resilience to irregularities in real-world data.
Missing data is handled through interpolation and imputation, ensuring a complete dataset for training.

#### The model’s performance is evaluated using four metrics
Mean Absolute Error (MAE): Measures the average absolute difference between predicted and actual WRI values.
Mean Squared Error (MSE): Provides insight into large prediction errors.
R-Squared (R²): Indicates the proportion of variance in WRI explained by the model.
These metrics ensure high accuracy, making DisasterWise a reliable prediction tool.

The neural network model consists of input layers for each feature, hidden layers with ReLU activation functions, and an output layer for the WRI score. Dropout layers prevent overfitting, and batch normalization helps maintain data consistency during training.

# <ins> How to Use DisasterWise </ins>
# Visit DisasterWise’s website at https://shadowed-sudden-frog.glitch.me/ 

1. Users can create an account to save their analyses and access exclusive features.
2. Use the interactive map to zoom into specific countries or regions of interest. Each region is marked with a color code representing its historical disaster impact level, making it easy to identify high-risk areas.
3. After selecting a region, users can explore disaster impact data, including economic and human impacts, and review AI-generated WRI predictions.
Charts and graphs display disaster trends, making it easy to visualize and analyze historical data.
4. Users can access a downloadable report summarizing disaster risk and WRI predictions, helping them make informed decisions on resource allocation and disaster preparedness.

## If you want to improve the system: Installation and Setup
1. Clone the repository: git clone https://github.com/YOURUSERNAME/DisasterWise.git cd DisasterWise
2. Ensure Python, JavaScript, and R are installed on your machine. Use the following command to install Python dependencies: pip install -r requirements.txt
3. Run the Platform: Follow the documentation to start both the backend server (Python) and the front-end interface (JavaScript and HTML).


# Future Enhancements
1. Real-Time Data Integration: incorporating real-time disaster feeds for more accurate and up-to-date WRI predictions.
2. Localized Predictions: implementing higher-resolution geographic overlays for localized predictions within countries.
3. Mobile Accessibility: developing a mobile application to increase accessibility and provide real-time notifications.


## Credits

DisasterWise was developed by Smithies at HackHolyoke-2024. This project combines machine learning, data analysis, and web development to create a comprehensive disaster risk assessment tool for global communities.
