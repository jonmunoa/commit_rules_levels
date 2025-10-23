# Ejemplo de contenido para hydra_mock.py en src/connectors

class HydraMock:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con hydra_mock (archivo raíz)...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando hydra_mock (archivo raíz)...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
