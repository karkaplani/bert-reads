# '''
# BERT - Inference only
# This is the final inference script to be as a base for the desktop application.
# It uses the fine-tuned and trained model downloaded from the Google Colab
# notebook written for training. Takes the user input text, from console, 
# writes it to a csv file, and then makes the prediction using the csv file
# and finally returns the result to the user.
# '''
# from transformers import BertTokenizer, BertForSequenceClassification
# from transformers import Trainer
# from datasets import load_dataset
# import torch
# import numpy as np
# import csv
# import sys
# import os
# from csv import writer

# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

# #Pre-trained and fine-tuned Model and tokenizer import
# model_name = "./bert-base-cased"
# tokenizer = BertTokenizer.from_pretrained(model_name)

# #Adjusting the model to load and use it for this runtime
# model_fn = './bert-base-cased/pytorch_model.bin'
# model_state_dict = torch.load(model_fn, map_location=torch.device('cpu')) #No need for map_location while using at a notebook
# model = BertForSequenceClassification.from_pretrained(model_name, state_dict = model_state_dict, num_labels = 1)

# #No need for the above lines since it's already done in the training, but 
# #if it gives unusual results, just uncomment it and run again.
# # model.classifier = nn.Linear(768, 1)
# # model.num_labels = 1

# def tokenize(dataset):
#   return tokenizer(dataset['excerpt'], padding = 'max_length', truncation = True, max_length = 512)

# #The score calculation
# def compute_metrics(eval_pred):
#   logits, labels = eval_pred
#   logits, labels = logits.squeeze(), labels.squeeze()
#   rmse = np.sqrt(np.mean((labels - logits) ** 2))
#   return {'RMSE': rmse} 

# #All the training arguments are excluded. 
# # Only the model and the calculation function needed for inference.
# trainer = Trainer(
#     model = model,
#     compute_metrics = compute_metrics
# )

# text = sys.argv[1]
  
# List=[text]
# List2=['excerpt']

# with open('test.csv', 'a') as f_object:
#     writer_object = writer(f_object)
#     writer_object.writerow(List2)
#     writer_object.writerow(List)
#     f_object.close()

# #test.csv acts as the middle man between BERT and the text input
# #input goes into that csv file and BERT reads that file to 
# #calculate the score. 
# test = load_dataset('csv', data_files = ['./test.csv'])
# test_dataset = test.map(tokenize, batched = True) 
# test_dataset = test_dataset.remove_columns(['excerpt'])
# test_dataset = test_dataset['train']

# output = trainer.predict(test_dataset)
# target = output.predictions.squeeze()

# #Below code from here cleans up the csv file for the next
# #program execution.
# imp = open('test.csv' , 'rb')
# out = open('test.csv' , 'wb')

# writer = csv.writer(out)

# for row in csv.reader(imp):

#   if row == text:
#     writer.writerow(row)

#   imp.close()
#   out.close()

  
# print(target)

import sys 

print(sys.argv[1])