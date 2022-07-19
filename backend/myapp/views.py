from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection

# Create your views here.
def home(request):
    data = {"route": "home"}
    return JsonResponse(data)


def backend(request):

    data = {"route": "backend"}
    return JsonResponse(data)


def database(request):
    data = {"route": ""}
    try:
        cursor = connection.cursor()
        query = "select version()"
        result = cursor.execute(query)
        stocks = cursor.fetchall()

        connection.commit()
        connection.close()
        data["route"] = "database"
        print(stocks)

    except:
        connection.rollback()
        data["route"] = "error"
        print("Failed Selecting in StockList")

    return JsonResponse(data)
