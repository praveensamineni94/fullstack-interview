'use client';

import { useState } from 'react';
import Link from 'next/link';

// 🔢 CHALLENGE: Data Processing
// 
// YOUR TASKS:
// 1. Implement the "Top Two Numbers" algorithm
// 2. Add data validation
// 3. Handle edge cases
// 4. Create additional data processing functions
//
// REQUIREMENTS:
// - Handle empty arrays
// - Handle arrays with less than 2 elements
// - Handle duplicate numbers
// - Add proper error messages

export default function DataProcessingChallenge() {
  const [input, setInput] = useState('[5, 2, 8, 1, 9, 3]');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  // TODO: Implement the top two algorithm
  const findTopTwo = (numbers: number[]): number[] => {
    // YOUR CODE HERE
    // Requirements:
    // - Return the two highest numbers
    // - Handle edge cases (empty array, less than 2 numbers)
    // - Handle duplicates properly
    // - Return in descending order
    
    // Sample implementation - you need to complete this
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array');
    }
    
    if (numbers.length === 0) {
      throw new Error('Array cannot be empty');
    }
    
    if (numbers.length === 1) {
      return [numbers[0]];
    }
    
    // TODO: Implement the actual algorithm
    // Hint: You can sort or use a more efficient algorithm
    
    return []; // Replace with your implementation
  };

  // TODO: Implement array sum function
  const calculateSum = (numbers: number[]): number => {
    // YOUR CODE HERE
    return 0;
  };

  // TODO: Implement average calculation
  const calculateAverage = (numbers: number[]): number => {
    // YOUR CODE HERE
    return 0;
  };

  // TODO: Implement finding unique numbers
  const findUniqueNumbers = (numbers: number[]): number[] => {
    // YOUR CODE HERE
    return [];
  };

  const processData = (operation: string) => {
    try {
      setError('');
      const numbers = JSON.parse(input);
      
      if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
      }

      if (!numbers.every(n => typeof n === 'number')) {
        throw new Error('All elements must be numbers');
      }

      let result;
      switch (operation) {
        case 'topTwo':
          result = findTopTwo(numbers);
          break;
        case 'sum':
          result = calculateSum(numbers);
          break;
        case 'average':
          result = calculateAverage(numbers);
          break;
        case 'unique':
          result = findUniqueNumbers(numbers);
          break;
        default:
          throw new Error('Unknown operation');
      }

      setResult({
        operation,
        input: numbers,
        output: result,
        timestamp: new Date().toLocaleTimeString()
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setResult(null);
    }
  };

  const testCases = [
    { name: 'Basic Array', input: '[5, 2, 8, 1, 9, 3]', expected: '[9, 8]' },
    { name: 'With Duplicates', input: '[5, 9, 2, 9, 1, 8]', expected: '[9, 9] or [9, 8]' },
    { name: 'Two Elements', input: '[3, 7]', expected: '[7, 3]' },
    { name: 'One Element', input: '[5]', expected: '[5]' },
    { name: 'Empty Array', input: '[]', expected: 'Error' },
    { name: 'Negative Numbers', input: '[-1, -5, -2, -8]', expected: '[-1, -2]' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Data Processing Challenge</h1>
            <p className="text-gray-600">Implement data processing algorithms</p>
          </div>
          <Link 
            href="/" 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            ← Back to Challenges
          </Link>
        </div>
        
        {/* Instructions */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">📝 Your Tasks:</h3>
          <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
            <li>Complete the <code className="bg-green-100 px-1 rounded">findTopTwo</code> function</li>
            <li>Implement the <code className="bg-green-100 px-1 rounded">calculateSum</code> function</li>
            <li>Add the <code className="bg-green-100 px-1 rounded">calculateAverage</code> function</li>
            <li>Create the <code className="bg-green-100 px-1 rounded">findUniqueNumbers</code> function</li>
            <li>Handle all edge cases properly</li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input and Controls */}
        <div className="space-y-6">
          {/* Input Area */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Input Data</h3>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number Array (JSON format)
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="[1, 2, 3, 4, 5]"
            />
          </div>

          {/* Operations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Operations</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => processData('topTwo')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Find Top Two
              </button>
              <button
                onClick={() => processData('sum')}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Calculate Sum
              </button>
              <button
                onClick={() => processData('average')}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
              >
                Calculate Average
              </button>
              <button
                onClick={() => processData('unique')}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
              >
                Find Unique
              </button>
            </div>
          </div>

          {/* Test Cases */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Test Cases</h3>
            <div className="space-y-2">
              {testCases.map((testCase, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium text-sm">{testCase.name}</div>
                    <div className="text-xs text-gray-600">{testCase.input}</div>
                  </div>
                  <button
                    onClick={() => setInput(testCase.input)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Use
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Result Display */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Result</h3>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong>Error:</strong> {error}
              </div>
            )}
            
            {result && (
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-600">Operation:</div>
                  <div className="font-medium">{result.operation}</div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-600">Input:</div>
                  <div className="font-mono text-sm">{JSON.stringify(result.input)}</div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded">
                  <div className="text-sm text-blue-600">Output:</div>
                  <div className="font-mono text-lg font-semibold text-blue-800">
                    {JSON.stringify(result.output)}
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Processed at {result.timestamp}
                </div>
              </div>
            )}
            
            {!result && !error && (
              <div className="text-gray-500 text-center py-8">
                Select an operation to see results
              </div>
            )}
          </div>

          {/* Algorithm Hints */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">💡 Algorithm Hints</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Top Two Numbers:</strong>
                <p className="text-gray-600">You can either sort the array or find the maximum twice. Consider time complexity.</p>
              </div>
              
              <div>
                <strong>Sum & Average:</strong>
                <p className="text-gray-600">Use reduce() or a simple loop. Remember to handle empty arrays.</p>
              </div>
              
              <div>
                <strong>Unique Numbers:</strong>
                <p className="text-gray-600">Consider using Set or filter with indexOf. Think about performance.</p>
              </div>
            </div>
          </div>

          {/* Expected Output Examples */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Expected Outputs</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">
                <strong>Top Two [5,2,8,1,9,3]:</strong> [9, 8]
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <strong>Sum [1,2,3,4,5]:</strong> 15
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <strong>Average [2,4,6]:</strong> 4
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <strong>Unique [1,2,2,3,3,3]:</strong> [1, 2, 3]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}