import random
import json

def generate_mock_predictions(num_samples):
    predictions = []
    for _ in range(num_samples):
        input_data = random.uniform(1, 5)  # Mock input data (e.g., number of rooms)
        predicted_price = 50000 + 25000 * input_data + random.uniform(-10000, 10000)
        actual_price = predicted_price + random.uniform(-5000, 5000)
        
        prediction = {
            'input_data': input_data,
            'predicted_price': predicted_price,
            'actual_price': actual_price,
        }
        predictions.append(prediction)
    
    return predictions

if __name__ == '__main__':
    num_samples = 50
    mock_predictions = generate_mock_predictions(num_samples)
    print(json.dumps(mock_predictions))
