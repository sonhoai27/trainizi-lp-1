import admin from "firebase-admin";
import { promises as fs } from "fs";
import { parse } from "csv-parse/sync";
import path from "path";
import axios from "axios";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface BlogRecord {
  Slug: string;
  Title: string;
  Date: string;
  Image: string;
  "Image:alt": string;
  "Job Type": string;
  Content: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyBNDjYQ1W15xK-THOZg6c00lTXy49LYUro",
  authDomain: "izicommunity-441501.firebaseapp.com",
  databaseURL:
    "https://izicommunity-441501-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "izicommunity-441501",
  storageBucket: "izicommunity-441501.firebasestorage.app", // Your correct bucket name
  messagingSenderId: "655546514452",
  appId: "1:655546514452:web:d2eed8dd3dd9db056dfb01",
  measurementId: "G-V2F02V77YW",
};

// Initialize Firebase Admin with better error handling
try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "izicommunity-441501",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDw/hvqmspn9ouz\np6B5Zf6yDluZ7SVh9Am6E5ZIyhBx226U6X1o3o4T7J1Y38Sf8EsV1XJKPpeWUbQ7\nBYxDOxNncW0B+LFquPagIceGcFOKQ/AJtHA2abBPjY4cx/WmhkWMzewgW+Abqayt\n9rmu7ZyQSTB/k15I4eHUUWRtYxvmU5FuSzc0ySnsa0RwwYwt73T38oLslL24kkza\nsFoI2dnPaTwPGeQclhuEiDWlrlRnwr3fqSK1p3YBYWeeGzkCtEx6CZd4/UL6TyNl\nY+UTiJ9OfMa0PdPAAFlL3+nJ0SrYa+q6HQXfKc5j2HZM4DEO530AfGjb7OBCXoCI\nJqvWN0xhAgMBAAECggEACWx6ZXxrlVCqClqv9wdSxB41HUoNd+zd04GwEwUZywYA\nZ0DRJ2BqkGNkjMTlULbKDN7Foxsa/OURhexT3Y4qFlW0ZEsYDvsQI9dmUL7EOYgq\nEwsUB0CvRREdQUlddQdToWutA9/r3dEPAFeBT9KZWHgQNjDqUzHIDbAoG/Hv9Zv0\nCxrx9uFrXhFHPg40g5kVf9qgwN2XDRL2Yhd7UDHAxnomSwGX7DOvpJpHJyR/Ed/W\nI9OhysUU0ungy+8l8h2JxQSj7TUeVbVitvvDAro5+sm9gvObHwRIzkpOtaHg5DQB\n/tyCmPQw8Tbuq/Grqwj1YDPXMYB2DeueWvWCl3m7kQKBgQD5qkrgATGII3iqA48U\n5UWp2qEwAldKH0TsWIpEKFVyNiYC+Rjl8tAREZfxGsvCmeWKMF9XpdZEb6T/vyZF\nYNUNN72inyZtHnLCZSBT45QOjnCnOwH1fLO70QayJ+/FU6eAo0tFe86r7gjftwYQ\nv1xYUS+sUW8h7qaZDgDRyuy9qQKBgQD3G3vGrJlUkbepGjdtvSDbFB1k2KywveL4\ndvlq/jQk2O09BCJp/ijZpcRQfNXP4BqVo1+1MfFzGXHqLLqTjyTPEugYINVblR1k\nSRzvKZalRtSgqmTxGvofG7B8cH/sg/QEtgw3w3LrYPiH1qxW1OM7i0qy947+i329\nNvvEUaIb+QKBgEoo/mK5mAfzWWVO91JipCXHDngfSeR3k1aNGk0Smgb59KKPcYjk\nbk+TpUl2By5/3kIFCl0ToqjjbOSW1/xlvgNWGltS4OwqzjXWKhshD5qfTvEtwvAz\noYPZnB6RZFR9+9RnLPWvx/0kELi7Oe8BmKGXRAzwh41RwWTXVwD6QQY5AoGBANw7\nMWiTIaC+sipTRD1YxzSZy8y6U8a9pdD98DNMVdrVPzMXQTioHW5FEB8P81tuhyMA\nVWdfGKsVbXJg5PRoKk0ns5T1hlI2JtjfVJtOvIWXCCAdXROJkIwzGGr/tPNtcwjT\n2zXDyuM/LKGcUUKeP9ssvKmee2IfnjQKEf8ZJlq5AoGBAJ/mRZLzGB39KiUAcORM\nOrvcSjPxsGVlQpUetDxYZ/V4xMEWx4MhbKkRyVg7Mhyo/uUIxl9co30zfTrllVTQ\n59CD8/cRuFdI5Zw87WCNthqOEaTmRoYeI2jvSaPkvqOB3q7TkKd0dea7mCwkCYNE\nx+2UaTWNlrUZaWh6yeYXJlx3\n-----END PRIVATE KEY-----\n",
      clientEmail:
        "firebase-adminsdk-86rqq@izicommunity-441501.iam.gserviceaccount.com",
    }),
    databaseURL: firebaseConfig.databaseURL,
    storageBucket: firebaseConfig.storageBucket,
  });

  console.log("Firebase Admin SDK initialized successfully.");
} catch (error) {
  console.error("Failed to initialize Firebase Admin SDK:", error);
  process.exit(1);
}

const db = admin.firestore();
db.settings({
  databaseId: "trainizi",
});

const storage = admin.storage().bucket();

// Test storage connection before proceeding
async function testStorageConnection() {
  try {
    const [exists] = await storage.exists();
    if (!exists) {
      throw new Error("Storage bucket does not exist");
    }
    console.log("Storage bucket connection verified.");
    return true;
  } catch (error) {
    console.error("Storage bucket test failed:", error);
    return false;
  }
}

async function main() {
  // Test storage connection first
  const storageReady = await testStorageConnection();
  if (!storageReady) {
    console.error("Please check your Firebase Storage configuration:");
    console.error("1. Ensure Storage is enabled in Firebase Console");
    console.error("2. Verify the correct bucket name");
    console.error("3. Check service account permissions");
    return;
  }

  const csvFilePath = path.resolve(__dirname, "./Blog.csv");

  try {
    const fileContent = await fs.readFile(csvFilePath);
    const records: BlogRecord[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    console.log(`Found ${records.length} records in the CSV file.`);

    for (const record of records) {
      try {
        const imageUrl = record.Image;
        if (!imageUrl) {
          console.log(
            `Skipping record with slug "${record.Slug}" due to missing image URL.`
          );
          continue;
        }

        console.log(`Processing blog: "${record.Title}"`);

        // 1. Download image with timeout and error handling
        const response = await axios.get(imageUrl, {
          responseType: "arraybuffer",
          timeout: 30000, // 30 second timeout
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; BlogImporter/1.0)",
          },
        });

        const imageBuffer = Buffer.from(response.data, "binary");
        const imageName =
          path.basename(new URL(imageUrl).pathname) ||
          `image-${Date.now()}.jpg`;
        const destination = `trainizi/blogs/${record.Slug}-${imageName}`;

        // 2. Upload to Firebase Storage
        const file = storage.file(destination);
        await file.save(imageBuffer, {
          metadata: {
            contentType: response.headers["content-type"] || "image/jpeg",
          },
        });

        console.log(`Image uploaded: ${destination}`);

        // 3. Make the file public and get public URL
        await file.makePublic();
        const publicUrl = `https://storage.googleapis.com/${storage.name}/${destination}`;

        // 4. Prepare data for Firestore
        const blogData = {
          slug: record.Slug,
          title: record.Title,
          date: new Date(record.Date),
          image: publicUrl,
          imageAlt: record["Image:alt"] || "",
          jobType: record["Job Type"] || "",
          content: record.Content,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // 5. Save to Firestore
        await db.collection("blogs").doc(record.Slug).set(blogData);
        console.log(`✓ Successfully imported blog: "${record.Title}"`);

        // Add a small delay to avoid rate limits
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error(
          `✗ Failed to import blog with slug "${record.Slug}":`,
          error
        );
        // Continue with next record instead of stopping
        continue;
      }
    }

    console.log("Import script finished successfully.");
  } catch (error) {
    console.error("Failed to read CSV file:", error);
  }
}

main().catch(console.error);
