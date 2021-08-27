# Import connect_to_mongo function from mongodb module
import routes

# Run the program
if __name__ == "__main__":
    # Start the back-end
    routes.start_server("127.0.0.1", True)