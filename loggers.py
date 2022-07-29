import logging


class logger():
    def __init__(self):
        pass

    def setup_logger(self, logger_name, log_file, level=logging.INFO):
        self.l = logging.getLogger(logger_name)
        self.formatter = logging.Formatter('%(asctime)s %(message)s')
        self.fileHandler = logging.FileHandler(log_file, mode='a')
        self.fileHandler.setFormatter(self.formatter)
        self.streamHandler = logging.StreamHandler()
        self.streamHandler.setFormatter(self.formatter)
        self.l.setLevel(level)
        self.l.addHandler(self.fileHandler)
        self.l.addHandler(self.streamHandler)

    def main_logger(self):
        self.setup_logger("log1", "main.log")
        logger_1 = logging.getLogger("log1")
        return logger_1

    def scrapper_logger(self):
        self.setup_logger("log2", "scrapper.log")
        logger = logging.getLogger("log2")
        return logger

    def clickup_logger(self):
        self.setup_logger('log3', 'clickup.log')
        logger = logging.getLogger('log3')
        return logger
