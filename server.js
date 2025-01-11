const express = require('express');
const app = express();

// Status code descriptions
const statusDescriptions = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and has resulted in one or more new resources being created.",
    204: "No Content: The server successfully processed the request, but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The client must authenticate itself to get the requested response.",
    403: "Forbidden: The client does not have access rights to the content.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The request method is known by the server but is not supported by the target resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is not ready to handle the request. Common causes include server overload or maintenance.",
    504: "Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
};

// GET endpoint for /status-info
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10); // Parse the code from query parameters

    // Check if the code exists in the statusDescriptions
    if (statusDescriptions[code]) {
        res.json({
            status: code,
            message: statusDescriptions[code]
        });
    } else {
        res.status(400).json({
            status: 400,
            message: "Invalid status code. Please provide a valid HTTP status code from the list: 200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504."
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
