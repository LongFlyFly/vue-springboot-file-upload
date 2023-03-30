import os
import pymysql

def selectAllFiles(db):
    cursor = db.cursor()
    sql = "select * from files"
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        allfiles = []
        for row in results:
            allfiles.append(row[1])
        return allfiles
    except:
        return None

def selectUsefulFiles(db):
    cursor = db.cursor()
    sql = "select * from user"
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        allfiles = []
        for row in results:
            allfiles.append(row[2].split("/")[-1])
        return allfiles
    except:
        return None

def deleteAction(list):
    basedir = "E://images/"
    for file in list:
        filepath = basedir + file
        if(os.path.isfile(filepath)):
            os.remove(filepath)
    print("delete done")

def application():
    db = pymysql.connect(host="localhost",user="root",password="",database="uploads")
    allFiles = selectAllFiles(db)
    allUsefulFiles = selectUsefulFiles(db)
    willBeDeleted = []
    for row in allFiles:
        if(row not in allUsefulFiles):
            willBeDeleted.append(row)
    deleteAction(willBeDeleted)
    print("script done")
if __name__ == '__main__':
    application()