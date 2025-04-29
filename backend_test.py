import requests
import sys
import os
import json
from datetime import datetime

class NexoraAPITester:
    def __init__(self, base_url="https://8b592e40-5520-472c-abb7-2e330f057734.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.text}")
                except:
                    pass
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_status_post(self):
        """Test posting a status check"""
        return self.run_test(
            "Post Status Check",
            "POST",
            "status",
            200,
            data={"client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"}
        )

    def test_status_get(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )
        
    def test_ai_chat(self, message, language="en"):
        """Test the AI chat endpoint"""
        return self.run_test(
            f"AI Chat ({language})",
            "POST",
            "chat",
            200,
            data={"message": message, "language": language}
        )

def main():
    # Setup
    tester = NexoraAPITester()
    
    # Run tests
    root_success, root_response = tester.test_root_endpoint()
    if not root_success:
        print("❌ Root endpoint test failed")
    else:
        print(f"Root endpoint response: {root_response}")
    
    status_post_success, status_post_response = tester.test_status_post()
    if not status_post_success:
        print("❌ Status post test failed")
    else:
        print(f"Status post response: {status_post_response}")
    
    status_get_success, status_get_response = tester.test_status_get()
    if not status_get_success:
        print("❌ Status get test failed")
    else:
        print(f"Status get response: {status_get_response}")
    
    # Test AI Chat API
    print("\n=== Testing AI Chat API ===")
    
    # Test English chat
    en_chat_success, en_chat_response = tester.test_ai_chat("Hello, what is Nexora?", "en")
    if not en_chat_success:
        print("❌ English chat test failed")
    else:
        print(f"English chat response: {json.dumps(en_chat_response, indent=2)}")
    
    # Test Burmese chat
    mm_chat_success, mm_chat_response = tester.test_ai_chat("မင်္ဂလာပါ", "mm")
    if not mm_chat_success:
        print("❌ Burmese chat test failed")
    else:
        print(f"Burmese chat response: {json.dumps(mm_chat_response, indent=2)}")
    
    # Test eSIM related query
    esim_chat_success, esim_chat_response = tester.test_ai_chat("How do I activate my eSIM?", "en")
    if not esim_chat_success:
        print("❌ eSIM query test failed")
    else:
        print(f"eSIM query response: {json.dumps(esim_chat_response, indent=2)}")

    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())