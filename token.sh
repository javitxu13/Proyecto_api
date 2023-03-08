#! /bin/bash


curl -X "POST" -H "Authorization: Basic YWU0OTkwYjJjODY1NDNjNDliYWNjOGEwZmM3NmU0ZTI6OTI3ZTFlMWUzYzA4NGRkNWEwYTQ5YjhjZjhlNmZkYzU=" -d grant_type=client_credentials https://accounts.spotify.com/api/token > token