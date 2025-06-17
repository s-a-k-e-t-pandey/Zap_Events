#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Replace these values with your actual test data
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzUwMDk0MjQ0fQ.aqNzfD__rdmt7AiAfoTkvUuYg95qdd0pgBFCxbkXJms"
USER_ID="1"

echo -e "${BLUE}Testing Zap API Routes${NC}"

# 1. Create a new Zap
echo -e "\n${GREEN}1. Creating a new Zap${NC}"
curl -X POST http://localhost:3000/api/v1/zap \
  -H "Content-Type: application/json" \
  -H "Authorization: $TOKEN" \
  -d '{
    "availableTriggerId": "your-trigger-id",
    "triggerMetadata": {},
    "actions": [
      {
        "availableActionId": "send-sol",
        "actionMetadata": {
          "amount": "100",
          "address": "your-solana-address"
        }
      }
    ]
  }'

# 2. Get all Zaps for the user
echo -e "\n\n${GREEN}2. Getting all Zaps${NC}"
curl -X GET http://localhost:3000/api/v1/zap \
  -H "Authorization: $TOKEN"

# Store a Zap ID from the previous response
ZAP_ID="your-zap-id"

# 3. Get a specific Zap
echo -e "\n\n${GREEN}3. Getting specific Zap${NC}"
curl -X GET http://localhost:3000/api/v1/zap/$ZAP_ID \
  -H "Authorization: $TOKEN"

# 4. Test the webhook endpoint (in hooks service)
echo -e "\n\n${GREEN}4. Testing webhook endpoint${NC}"
curl -X POST http://localhost:3002/hooks/catch/$USER_ID/$ZAP_ID \
  -H "Content-Type: application/json" \
  -d '{
    "eventData": "test-webhook-data"
  }'

echo -e "\n"
