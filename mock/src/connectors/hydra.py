# Ejemplo de contenido para hydra.py en mock/src/connectors

class HydraConnector:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con hydra...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando hydra...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
