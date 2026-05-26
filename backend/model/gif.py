from dataclasses import dataclass
from enum import Enum


class Rating(Enum):
    LEVEL_1 = 'g'
    LEVEL_2 = 'pg'
    LEVEL_3 = 'pg-13'
    LEVEL_4 = 'r'


@dataclass
class Gif:
    name: str = ''
    url: str = ''
    rating: str = ''
    creator: str = ''

    def __repr__(self) -> str:
        return f'{self.name} - {self.creator} - {self.url}'

    def to_dict(self) -> dict:
        return {
            'name': self.name,
            'url': self.url,
            'rating': self.rating,
            'creator': self.creator,
        }
