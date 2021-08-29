# BERT Reads

BERT Reads is primarily a machine learning project using a fine-tuned BERT model to predict the readability level of a given text. 

## Background

### Initial Team Project
At the beginning of the "Software Development Project" class, me and my group were assigned to a machine learning project, which was actually a [Kaggle competition](https://www.kaggle.com/c/commonlitreadabilityprize) that was briefly aiming to calculate the readability score of a a given data set. During our excellent team work throughout the entire semester, we have followed Agile Development methodologies to build the project, and used ZenHub and Microsoft Teams to collaborate. Being a research project, by the time we had to learn Python as well as things about Machine Learning and NLP (Natural Language Processing). While some of the group mates were working to build a model using NLTK, I was doing researches on Google's NLP model called "BERT". After some time, we had a model up and running made with NLTK. 

### Individual Work

Then, I figured out how to use BERT for that particular task, and finetuned a pre-trained model to be uploaded to the competition's notebook environment. That new model improved the ranking drastically. Since there was no time before the deadline hits, the model could not be trained for a long time for better results. 

### Web Application

After the research project was done and the class was passed with A+, I have decided to take the project up to a new level and use the model in an actual web application, which is this app. The model that I finetuned was trained in [a Google Colab Notebook](https://colab.research.google.com/drive/13cHsM26T5u86BMmQRduyQjjKC_Y2iHas?usp=sharing), and downloaded to be used only for inference later in the app. For the first prototype, it was trained for roughly half an hour (5 epochs) on approximately 3,000 reading passages, but will be trained for more time in the future to get a better RMSE result. 

At first, the backend was built using Nodejs/Express, but since it was hard to interact with the [inference script](https://github.com/karkaplani/bert-reads/blob/master/controller/run_finetuned.py) that is actually using the model to make the prediction, it was rebuilt using Flask.

## Installation

After cloning the repository, there are couple of steps to follow before actually using the project

First, from the root folder go into the controller by `cd controller`, and install the required Python dependencies

```bash
pip install -r requirements.txt
```
Then, `cd ..` to go back to the root folder and `cd view` to navigate to the frontend folder, and install the required Node dependencies 
```bash
npm install
```
Also, download the model to be used in the project from [here](). Extract the folder inside the zip file to the BERT directory. 

These are the requirements for the project to be up and running. For a little styling purpose, font awesome was used, but excluded from the GitHub repository. To use it, download from [here](https://fontawesome.com/v4.7/get-started/), and move the entire folder into view/public.

## Running

After the installation, navigate to the controller and start the server
```
python main.py
```
Then, start the frontend and the actual application
```
npm start
```

## Usage

The application is very simple to use. Either write or copy and paste a text, or upload a text file, and press the read button. Just make sure the text is written in English, and there are no non-English characters included. 

## Further
The model will be trained for more time on the Google Colab Notebooks, and different learning rates will be experimented to get the best result. It might be tested on more passages as well. Different models like Roberta and Dbert was used, but the best result was gotten from BERT, yet different variants of BERT can be tried. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0//)