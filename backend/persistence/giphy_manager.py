from typing import List
import constants
import requests
from .persistence_exception import PersistenceException
from model.gif import Gif
from http.client import OK


class GiphyManager:

    def __init__(self) -> None:
        self.search_end_point = 'https://api.giphy.com/v1/gifs/search'
        
        
    def get_search_params(self, query: str, limit: int = 50):
        token = constants.GIPHY_TOKEN
        if not token:
            raise PersistenceException('The provided token is null.')
        return {
            "api_key": token,
            "q": query,
            "limit": limit
        }

    def get_gifs(self, query: str, limit: int = 50) -> List[Gif]:
        try:
            url = self.search_end_point
            search_parameters = self.get_search_params(query, limit=limit)
            request = requests.get(url=url, params=search_parameters)
            if request.status_code != OK:
                raise PersistenceException(request.text)
            response = request.json()
            return [
                Gif(
                    name=element['title'],
                    rating=element['rating'],
                    url=element['images']['original']['url'],
                    creator=element['username'],
                )
                for element in response['data']
            ]
        except Exception as e:
            raise PersistenceException(f'Error retrieving the gifs: {e.args[0]}.')