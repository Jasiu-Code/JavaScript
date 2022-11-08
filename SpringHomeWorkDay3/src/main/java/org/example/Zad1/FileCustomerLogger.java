package org.example.Zad1;

import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;
@Service("FileCustomerLogger")
public class FileCustomerLogger implements CustomerLogger {

    private String filename;

    public FileCustomerLogger(String filename){
        this.filename = filename;

    }

    @Override
    public void log() {
        try {
            FileWriter myWriter = new FileWriter(filename);
            myWriter.write("JAkis log ");
            myWriter.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
