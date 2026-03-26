# IP Skill

A skill for retrieving the user's current public IP address and its associated geolocation data. This skill is particularly useful as a fallback when the user rejects native Location permissions, demonstrating multiple tool calling to achieve a result. 

If you need the user's location and native location tools fail or are rejected, follow these steps:

1. Use the `webfetch` tool to get the current IP from `https://api.ipify.org?format=json`, which returns a JSON object like `{"ip": "192.168.0.1"}`.
2. Extract the IP from the response.
3. Use the `webfetch` tool a second time to call `https://ipinfo.io/<ip>/geo` to retrieve the full geolocation data (which includes city, region, country, loc, org, postal, and timezone). 

Present this information clearly to the user as their current estimated location.

## Examples

- "What is my IP address?"
- "Get my IP geolocation."
- "Where am I located based on my IP?"
- "Where am I located right now based on my IP?"
- "Show me my current IP and city."
- "What country is my internet connection in?"
- "Check my public IP and tell me the region."
- "I don't want to share my GPS location, where do you think I am?"