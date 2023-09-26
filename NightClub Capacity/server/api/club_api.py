from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
from yaml import parser

from .swen_344_db_utils import *

def threshold(max):
    thres = max * 0.8; 
    return thres


def list_clubs(): 
    clubs = []
    details = exec_get_all("SELECT * FROM clubs")

    for detail in details: 
        course = {"id": detail[0], "name": detail[1], "city": detail[2], "genre":detail[3], "occupancy":detail[4], "max_occ": detail[5], "thres_occ": detail[6]}
        clubs.append(course)
    
    return clubs

def delete_club(id: int):
    sql_comm = "DELETE FROM clubs WHERE id = " + str(id)
    exec_commit(sql_comm)

def add_club(name:str, city:str, genre:str, max_occ: int, thres_occ: int):
    if thres_occ == None or thres_occ == 0 : 
        thres_occ = threshold(max_occ)
    sql_comm = "INSERT INTO clubs (name, city, genre, max_occ, thres_occ) VALUES ('" + name + "', '" + city + "', '" + genre + "', " + str(max_occ) + "," + str(thres_occ) + ")"
    exec_commit(sql_comm)

def update_club(id:int, name:str, city:str, genre:str, max_occ: int, thres_occ: int): 
    sql_comm = "UPDATE clubs SET name = '" + name + "',  city = '" + city + "', genre = '" + genre + "', max_occ = " + str(max_occ) + ", thres_occ = " + str(thres_occ) + " WHERE id = " + str(id) + ";"
    exec_commit(sql_comm)

def add_occupancy(id:int): 
    occ_details = exec_get_one("SELECT occupancy, max_occ, thres_occ FROM clubs WHERE id = " + str(id))
    occupancy = occ_details[0] + 1
    sql_comm = "UPDATE clubs SET occupancy = " + str(occupancy) + " WHERE id = " + str(id) + ";"
    exec_commit(sql_comm)

def subtract_occupancy(id:int): 
    occ_details = exec_get_one("SELECT occupancy, max_occ, thres_occ FROM clubs WHERE id = " + str(id))
    occupancy = occ_details[0] - 1
    sql_comm = "UPDATE clubs SET occupancy = " + str(occupancy) + " WHERE id = " + str(id) + ";"
    exec_commit(sql_comm)
    

class Clubs(Resource):

    def get(self):
        result = list_clubs()
        return result
    
    def delete(self): 
        p1 = request.args.get('id')
        delete_club(p1)
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('city', type=str)
        parser.add_argument('genre', type=str)
        parser.add_argument('max_occ', type=int)
        parser.add_argument('thres_occ', type=int)
        args = parser.parse_args()

        p1 = args['name']
        p2 = args['city']
        p3 = args['genre']
        p4 = args['max_occ']
        p5 = args['thres_occ']

        add_club(p1, p2, p3, p4, p5)



class UpdateClub(Resource): 

    def put(self, id):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('city', type=str)
        parser.add_argument('genre', type=str)
        parser.add_argument('max_occ', type=int)
        parser.add_argument('thres_occ', type=int)
        args = parser.parse_args()

        p1 = args['name']
        p2 = args['city']
        p3 = args['genre']
        p4 = args['max_occ']
        p5 = args['thres_occ']

        update_club(id, p1, p2, p3, p4, p5)

        
class AddOccupancy(Resource): 

    def put(self, id): 
        add_occupancy(id)

class SubtractOccupancy(Resource): 
    
    def put(self, id): 
        subtract_occupancy(id)
    
    
