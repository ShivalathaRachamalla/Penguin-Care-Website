package se.kth.sda7.wdgroupproject.rimg;

import javax.persistence.*;


    @Entity
    @Table(name = "files")
    public class RImg{
        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private String id;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getFileName() {
            return fileName;
        }

        public void setFileName(String fileName) {
            this.fileName = fileName;
        }

        public String getFileType() {
            return fileType;
        }

        public void setFileType(String fileType) {
            this.fileType = fileType;
        }

        public byte[] getData() {
            return data;
        }

        public void setData(byte[] data) {
            this.data = data;
        }

        @Column(name = "fileName")
        private String fileName;

        @Column(name = "fileType")
        private String fileType;

        @Lob
        @Column(name = "date")
        private byte[] data;

        public RImg(String id, String fileName, String fileType, byte[] data) {
            this.id = id;
            this.fileName = fileName;
            this.fileType = fileType;
            this.data = data;
        }
    }

