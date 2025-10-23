# Ejemplo de contenido para fichero.py en mocka

class MockaConnector:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con mocka...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando mocka...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
